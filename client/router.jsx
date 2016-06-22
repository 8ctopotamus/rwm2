import React from 'react';
import { MainLayout } from './layouts/MainLayout.jsx';
import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';
import PodcastLib from './components/PodcastLib.jsx';
import { Session } from 'meteor/session';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: <h1>content...</h1>
    });
  }
});
