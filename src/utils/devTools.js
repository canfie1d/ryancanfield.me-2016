import React from 'react';
import { createStore as initialCreateStore, compose } from 'redux';
import { DockMonitor } from 'redux-devtools-dock-monitor';

export let createStore = initialCreateStore;
const __DEV__ = process.env.DEBUG;

if (__DEV__) {
  createStore = compose(
    require('redux-devtools').devTools(),
    require('redux-devtools').persistState(
      window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    ),
    createStore
  );
}

export function renderDevTools() {
  if (__DEV__) {
    let { createDevTools } = require('redux-devtools');
    let { DockMonitor } = require('redux-devtools-dock-monitor');
    let { LogMonitor } = require('redux-devtools-log-monitor');
    let DevTools;
    DevTools = createDevTools(
      <DockMonitor
        toggleVisibilityKey='ctrl-h'
        changePositionKey='ctrl-q'
        defaultIsVisible={true}
      >
        <LogMonitor theme='tomorrow' />
      </DockMonitor>
    );

    return DevTools;

  }
  return null;
}
