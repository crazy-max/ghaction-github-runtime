import * as github from './github';
import * as core from '@actions/core';

async function run() {
  try {
    await github.exposeRuntime();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
