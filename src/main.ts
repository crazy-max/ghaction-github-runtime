import * as core from '@actions/core';

import * as github from './github.js';

async function run() {
  try {
    await github.exposeRuntime();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
