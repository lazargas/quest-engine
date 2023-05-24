//To check if a user has joined a Telegram channel

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Telegraf } from 'telegraf';

import { Model } from 'mongoose';
import { Telegram, TelegramDocument } from '../_common/schema/Telegram.schema';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';
import input from 'input';

const apiId = 26555088;
const apiHash = 'b62165a1523c3f18f3a2deb71624f171';


@Injectable()
export class TelegramService {
  constructor(
    @InjectModel(Telegram.name) private TelegramModel: Model<TelegramDocument>,
  ) {}

  async login(): Promise<any> {
    const session = new StringSession(''); // You should put your string session here
    const client = new TelegramClient(session, apiId, apiHash, {
      connectionRetries: 5,
    });
    console.log('Loading interactive example...');
    await client.start({
      phoneNumber: async () => await input.text('number ?'),
      password: async () => await input.text('password?'),
      phoneCode: async () => await input.text('Code ?'),
      onError: (err) => console.log(err),
    });
    console.log('You should now be connected.');
    console.log(client.session.save()); // Save this string to avoid logging in again
    await client.sendMessage('me', { message: 'Hello!' });
    return client.session.save();
  }

  async run(Session:string,channelId:string,userId:string): Promise<any> {
    const session = new StringSession(Session); // You should put your string session here
    const client = new TelegramClient(session, apiId, apiHash, {});

    await client.start({
      phoneNumber: async () => await input.text("number ?"),
      password: async () => await input.text("password?"),
      phoneCode: async () => await input.text("Code ?"),
      onError: (err) => console.log(err),
    });
  
    await client.connect();
  
    console.log("You should now be connected.");
    console.log(client.session.save());
  
    const result = await client.invoke(
      new Api.channels.GetParticipant({
        channel: channelId,
        participant: userId,
      }),
    );
    
    console.log(result);  // prints the result
  }
}
