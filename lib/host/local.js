import fs from 'fs';
import { settingsPath } from '../../test/settings';
import Debug from 'debug';
import os from 'os';

let debug = Debug('docker-worker:host:local');

export function billingCycleUptime() {
  return os.uptime();
}

export function billingCycleInterval() {
  return 0;
}

export function getTerminationTime() {
  return '';
}

export function configure() {
  return {
    host: 'docker-worker-local.taskcluster.net',
    publicIp: '127.0.0.1',
    workerNodeType: 'docker-worker-local',
    shutdown: {
      enabled: false,
      minimumCycleSeconds: 120
    }
  };
}
