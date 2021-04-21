/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://demo.vercel.events';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'vercel';
export const BRAND_NAME = 'Ubuntu';
export const SITE_NAME_MULTILINE = ['Ubuntu #Earthday', 'Conf'];
export const SITE_NAME = 'Ubuntu #Earthday Conf';
export const META_DESCRIPTION =
  'This webinar is dedicated to the people of Africa. The growing realisation of how urgent the need is to get our people and earth healthy again and to alleviate the health care costs of individuals and the government is steadily mounting. Simply put we are all victims of a food system which was designed to place profit before health. This #Earthday you will learn why were high fibre whole food plant-based principles the pre-colonial order of the day in Africa.';
export const SITE_DESCRIPTION =
  'Ubuntu #Earthday Webinar. An interactive online experience.';
export const DATE = 'April 22, 2021';
export const SHORT_DATE = 'Apr 22 - 17:00pm SAST';
export const FULL_DATE = 'Apr 22nd 5pm South Africa Standard Time (GMT+2)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/vercel/virtual-event-starter-kit';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Introduction',
    route: '/stage/a'
  },
  {
    name: 'The current Ubuntu diabetes reversal program',
    route: '/stage/c'
  },
  {
    name: 'The climate emergency',
    route: '/stage/m'
  },
  {
    name: 'The importance of Plant-Base',
    route: '/stage/e'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Expo',
    route: '/expo'
  },
  {
     name: 'Resources',
     route: '/company'
  }
];

export type TicketGenerationState = 'default' | 'loading';
