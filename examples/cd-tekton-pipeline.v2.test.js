/**
 * @jest-environment node
 */
/**
 * (C) Copyright IBM Corp. 2022.
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

/* eslint-disable no-console */

const CdTektonPipelineV2 = require('../dist/cd-tekton-pipeline/v2');
// eslint-disable-next-line node/no-unpublished-require
const authHelper = require('../test/resources/auth-helper.js');
// You can use the readExternalSources method to access additional configuration values
// const { readExternalSources } = require('ibm-cloud-sdk-core');

//
// This file provides an example of how to use the CD Tekton Pipeline service.
//
// The following configuration properties are assumed to be defined:
// CD_TEKTON_PIPELINE_URL=<service base url>
// CD_TEKTON_PIPELINE_AUTH_TYPE=iam
// CD_TEKTON_PIPELINE_APIKEY=<IAM apikey>
// CD_TEKTON_PIPELINE_AUTH_URL=<IAM token service base URL - omit this if using the production environment>
//
// These configuration properties can be exported as environment variables, or stored
// in a configuration file and then:
// export IBM_CREDENTIALS_FILE=<name of configuration file>
//
const configFile = 'cd_tekton_pipeline_v2.env';

const describe = authHelper.prepareTests(configFile);

// Save original console.log
const originalLog = console.log;
const originalWarn = console.warn;    

// Mocks for console.log and console.warn
const consoleLogMock = jest.spyOn(console, 'log');
const consoleWarnMock = jest.spyOn(console, 'warn');

describe('CdTektonPipelineV2', () => {
  // Service instance
  let cdTektonPipelineService;

  // To access additional configuration values, uncomment this line and extract the values from config
  // const config = readExternalSources(CdTektonPipelineV2.DEFAULT_SERVICE_NAME);

  test('Initialize services', async () => {
  // begin-common

    cdTektonPipelineService = CdTektonPipelineV2.newInstance();

  // end-common
  });
  

  test('createTektonPipeline request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createTektonPipeline() result:');
    // begin-create_tekton_pipeline

    // Request models needed by this operation.

    // WorkerWithId
    const workerWithIdModel = {
      id: 'public',
    };

    const params = {
      id: '94619026-912b-4d92-8f51-6c74f0692d90',
      worker: workerWithIdModel,
    };

    let res;
    try {
      res = await cdTektonPipelineService.createTektonPipeline(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_tekton_pipeline
  });

  test('getTektonPipeline request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getTektonPipeline() result:');
    // begin-get_tekton_pipeline

    const params = {
      id: '94619026-912b-4d92-8f51-6c74f0692d90',
    };

    let res;
    try {
      res = await cdTektonPipelineService.getTektonPipeline(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_tekton_pipeline
  });

  test('updateTektonPipeline request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('updateTektonPipeline() result:');
    // begin-update_tekton_pipeline

    // Request models needed by this operation.

    // WorkerWithId
    const workerWithIdModel = {
      id: 'public',
    };

    const params = {
      id: '94619026-912b-4d92-8f51-6c74f0692d90',
      worker: workerWithIdModel,
    };

    let res;
    try {
      res = await cdTektonPipelineService.updateTektonPipeline(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-update_tekton_pipeline
  });

  test('listTektonPipelineRuns request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listTektonPipelineRuns() result:');
    // begin-list_tekton_pipeline_runs

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      status: 'succeeded',
      triggerName: 'manual-trigger',
    };

    let res;
    try {
      res = await cdTektonPipelineService.listTektonPipelineRuns(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_tekton_pipeline_runs
  });

  test('createTektonPipelineRun request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createTektonPipelineRun() result:');
    // begin-create_tekton_pipeline_run

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      triggerName: 'Generic Webhook Trigger - 0',
      triggerProperties: { 'pipeline-debug': 'false' },
      secureTriggerProperties: { 'secure-property-key': 'secure value' },
      triggerHeader: { source: 'api' },
      triggerBody: { message: 'hello world', enable: 'true', detail: { name: 'example' } },
    };

    let res;
    try {
      res = await cdTektonPipelineService.createTektonPipelineRun(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_tekton_pipeline_run
  });

  test('getTektonPipelineRun request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getTektonPipelineRun() result:');
    // begin-get_tekton_pipeline_run

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      id: '94619026-912b-4d92-8f51-6c74f0692d90',
      includes: 'definitions',
    };

    let res;
    try {
      res = await cdTektonPipelineService.getTektonPipelineRun(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_tekton_pipeline_run
  });

  test('cancelTektonPipelineRun request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('cancelTektonPipelineRun() result:');
    // begin-cancel_tekton_pipeline_run

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      id: '94619026-912b-4d92-8f51-6c74f0692d90',
      force: true,
    };

    let res;
    try {
      res = await cdTektonPipelineService.cancelTektonPipelineRun(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-cancel_tekton_pipeline_run
  });

  test('rerunTektonPipelineRun request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('rerunTektonPipelineRun() result:');
    // begin-rerun_tekton_pipeline_run

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      id: '94619026-912b-4d92-8f51-6c74f0692d90',
    };

    let res;
    try {
      res = await cdTektonPipelineService.rerunTektonPipelineRun(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-rerun_tekton_pipeline_run
  });

  test('getTektonPipelineRunLogs request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getTektonPipelineRunLogs() result:');
    // begin-get_tekton_pipeline_run_logs

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      id: '94619026-912b-4d92-8f51-6c74f0692d90',
    };

    let res;
    try {
      res = await cdTektonPipelineService.getTektonPipelineRunLogs(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_tekton_pipeline_run_logs
  });

  test('getTektonPipelineRunLogContent request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getTektonPipelineRunLogContent() result:');
    // begin-get_tekton_pipeline_run_log_content

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      pipelineRunId: 'bf4b3abd-0c93-416b-911e-9cf42f1a1085',
      id: '94619026-912b-4d92-8f51-6c74f0692d90',
    };

    let res;
    try {
      res = await cdTektonPipelineService.getTektonPipelineRunLogContent(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_tekton_pipeline_run_log_content
  });

  test('listTektonPipelineDefinitions request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listTektonPipelineDefinitions() result:');
    // begin-list_tekton_pipeline_definitions

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
    };

    let res;
    try {
      res = await cdTektonPipelineService.listTektonPipelineDefinitions(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_tekton_pipeline_definitions
  });

  test('createTektonPipelineDefinition request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createTektonPipelineDefinition() result:');
    // begin-create_tekton_pipeline_definition

    // Request models needed by this operation.

    // DefinitionScmSource
    const definitionScmSourceModel = {
      url: 'https://github.com/IBM/tekton-tutorial.git',
      branch: 'master',
      path: '.tekton',
    };

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      scmSource: definitionScmSourceModel,
    };

    let res;
    try {
      res = await cdTektonPipelineService.createTektonPipelineDefinition(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_tekton_pipeline_definition
  });

  test('getTektonPipelineDefinition request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getTektonPipelineDefinition() result:');
    // begin-get_tekton_pipeline_definition

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      definitionId: '94299034-d45f-4e9a-8ed5-6bd5c7bb7ada',
    };

    let res;
    try {
      res = await cdTektonPipelineService.getTektonPipelineDefinition(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_tekton_pipeline_definition
  });

  test('replaceTektonPipelineDefinition request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('replaceTektonPipelineDefinition() result:');
    // begin-replace_tekton_pipeline_definition

    // Request models needed by this operation.

    // DefinitionScmSource
    const definitionScmSourceModel = {
      url: 'https://github.com/IBM/tekton-tutorial.git',
      branch: 'master',
      path: '.tekton',
    };

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      definitionId: '94299034-d45f-4e9a-8ed5-6bd5c7bb7ada',
      scmSource: definitionScmSourceModel,
      serviceInstanceId: '071d8049-d984-4feb-a2ed-2a1e938918ba',
      id: '22f92ab1-e0ac-4c65-84e7-8a4cb32dba0f',
    };

    let res;
    try {
      res = await cdTektonPipelineService.replaceTektonPipelineDefinition(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-replace_tekton_pipeline_definition
  });

  test('listTektonPipelineProperties request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listTektonPipelineProperties() result:');
    // begin-list_tekton_pipeline_properties

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      name: 'prod',
      type: ['SECURE', 'TEXT'],
      sort: 'name',
    };

    let res;
    try {
      res = await cdTektonPipelineService.listTektonPipelineProperties(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_tekton_pipeline_properties
  });

  test('createTektonPipelineProperties request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createTektonPipelineProperties() result:');
    // begin-create_tekton_pipeline_properties

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      name: 'key1',
      type: 'TEXT',
      value: 'https://github.com/IBM/tekton-tutorial.git',
    };

    let res;
    try {
      res = await cdTektonPipelineService.createTektonPipelineProperties(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_tekton_pipeline_properties
  });

  test('getTektonPipelineProperty request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getTektonPipelineProperty() result:');
    // begin-get_tekton_pipeline_property

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      propertyName: 'debug-pipeline',
    };

    let res;
    try {
      res = await cdTektonPipelineService.getTektonPipelineProperty(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_tekton_pipeline_property
  });

  test('replaceTektonPipelineProperty request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('replaceTektonPipelineProperty() result:');
    // begin-replace_tekton_pipeline_property

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      propertyName: 'debug-pipeline',
      name: 'key1',
      type: 'TEXT',
      value: 'https://github.com/IBM/tekton-tutorial.git',
    };

    let res;
    try {
      res = await cdTektonPipelineService.replaceTektonPipelineProperty(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-replace_tekton_pipeline_property
  });

  test('listTektonPipelineTriggers request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listTektonPipelineTriggers() result:');
    // begin-list_tekton_pipeline_triggers

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      type: 'manual,scm',
      disabled: 'true',
      tags: 'tag1,tag2',
    };

    let res;
    try {
      res = await cdTektonPipelineService.listTektonPipelineTriggers(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_tekton_pipeline_triggers
  });

  test('createTektonPipelineTrigger request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createTektonPipelineTrigger() result:');
    // begin-create_tekton_pipeline_trigger

    // Request models needed by this operation.

    // TriggerDuplicateTrigger
    const triggerModel = {
      source_trigger_id: 'b3a8228f-1c82-409b-b249-7639166a0300',
      name: 'Generic Trigger- duplicated',
    };

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      trigger: triggerModel,
    };

    let res;
    try {
      res = await cdTektonPipelineService.createTektonPipelineTrigger(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_tekton_pipeline_trigger
  });

  test('getTektonPipelineTrigger request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getTektonPipelineTrigger() result:');
    // begin-get_tekton_pipeline_trigger

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      triggerId: '1bb892a1-2e04-4768-a369-b1159eace147',
    };

    let res;
    try {
      res = await cdTektonPipelineService.getTektonPipelineTrigger(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_tekton_pipeline_trigger
  });

  test('updateTektonPipelineTrigger request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('updateTektonPipelineTrigger() result:');
    // begin-update_tekton_pipeline_trigger

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      triggerId: '1bb892a1-2e04-4768-a369-b1159eace147',
      name: 'start-deploy',
      disabled: true,
    };

    let res;
    try {
      res = await cdTektonPipelineService.updateTektonPipelineTrigger(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-update_tekton_pipeline_trigger
  });

  test('listTektonPipelineTriggerProperties request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listTektonPipelineTriggerProperties() result:');
    // begin-list_tekton_pipeline_trigger_properties

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      triggerId: '1bb892a1-2e04-4768-a369-b1159eace147',
      name: 'prod',
      type: 'SECURE,TEXT',
      sort: 'name',
    };

    let res;
    try {
      res = await cdTektonPipelineService.listTektonPipelineTriggerProperties(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_tekton_pipeline_trigger_properties
  });

  test('createTektonPipelineTriggerProperties request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createTektonPipelineTriggerProperties() result:');
    // begin-create_tekton_pipeline_trigger_properties

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      triggerId: '1bb892a1-2e04-4768-a369-b1159eace147',
      name: 'key1',
      type: 'TEXT',
      value: 'https://github.com/IBM/tekton-tutorial.git',
    };

    let res;
    try {
      res = await cdTektonPipelineService.createTektonPipelineTriggerProperties(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_tekton_pipeline_trigger_properties
  });

  test('getTektonPipelineTriggerProperty request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getTektonPipelineTriggerProperty() result:');
    // begin-get_tekton_pipeline_trigger_property

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      triggerId: '1bb892a1-2e04-4768-a369-b1159eace147',
      propertyName: 'debug-pipeline',
    };

    let res;
    try {
      res = await cdTektonPipelineService.getTektonPipelineTriggerProperty(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_tekton_pipeline_trigger_property
  });

  test('replaceTektonPipelineTriggerProperty request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('replaceTektonPipelineTriggerProperty() result:');
    // begin-replace_tekton_pipeline_trigger_property

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      triggerId: '1bb892a1-2e04-4768-a369-b1159eace147',
      propertyName: 'debug-pipeline',
      name: 'key1',
      type: 'TEXT',
      value: 'https://github.com/IBM/tekton-tutorial.git',
    };

    let res;
    try {
      res = await cdTektonPipelineService.replaceTektonPipelineTriggerProperty(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-replace_tekton_pipeline_trigger_property
  });

  test('deleteTektonPipelineTriggerProperty request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    // begin-delete_tekton_pipeline_trigger_property

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      triggerId: '1bb892a1-2e04-4768-a369-b1159eace147',
      propertyName: 'debug-pipeline',
    };

    try {
      await cdTektonPipelineService.deleteTektonPipelineTriggerProperty(params);
    } catch (err) {
      console.warn(err);
    }

    // end-delete_tekton_pipeline_trigger_property
  });

  test('deleteTektonPipelineTrigger request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    // begin-delete_tekton_pipeline_trigger

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      triggerId: '1bb892a1-2e04-4768-a369-b1159eace147',
    };

    try {
      await cdTektonPipelineService.deleteTektonPipelineTrigger(params);
    } catch (err) {
      console.warn(err);
    }

    // end-delete_tekton_pipeline_trigger
  });

  test('deleteTektonPipelineRun request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    // begin-delete_tekton_pipeline_run

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      id: '94619026-912b-4d92-8f51-6c74f0692d90',
    };

    try {
      await cdTektonPipelineService.deleteTektonPipelineRun(params);
    } catch (err) {
      console.warn(err);
    }

    // end-delete_tekton_pipeline_run
  });

  test('deleteTektonPipelineProperty request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    // begin-delete_tekton_pipeline_property

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      propertyName: 'debug-pipeline',
    };

    try {
      await cdTektonPipelineService.deleteTektonPipelineProperty(params);
    } catch (err) {
      console.warn(err);
    }

    // end-delete_tekton_pipeline_property
  });

  test('deleteTektonPipelineDefinition request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    // begin-delete_tekton_pipeline_definition

    const params = {
      pipelineId: '94619026-912b-4d92-8f51-6c74f0692d90',
      definitionId: '94299034-d45f-4e9a-8ed5-6bd5c7bb7ada',
    };

    try {
      await cdTektonPipelineService.deleteTektonPipelineDefinition(params);
    } catch (err) {
      console.warn(err);
    }

    // end-delete_tekton_pipeline_definition
  });

  test('deleteTektonPipeline request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    // begin-delete_tekton_pipeline

    const params = {
      id: '94619026-912b-4d92-8f51-6c74f0692d90',
    };

    try {
      await cdTektonPipelineService.deleteTektonPipeline(params);
    } catch (err) {
      console.warn(err);
    }

    // end-delete_tekton_pipeline
  });
});
