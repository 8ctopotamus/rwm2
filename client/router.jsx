import React from 'react';
import { HomeLayout } from './layouts/HomeLayout.jsx';
import { MainLayout } from './layouts/MainLayout.jsx';
import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';
import PodcastLib from './components/PodcastLib.jsx';
import { Session } from 'meteor/session';

FlowRouter.route('/', {
  action() {
    mount(HomeLayout, {
      content: (<h1>Home</h1>)
    });
  }
});

FlowRouter.route('/:userslug', {
  action(params, queryParams) {
    mount(MainLayout, {
      content: (<h1>content...</h1>)
    });
  }
});
