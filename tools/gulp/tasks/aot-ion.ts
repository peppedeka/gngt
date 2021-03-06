import {task} from 'gulp';
import {execNodeTask} from '../util/task_helpers';
import {join} from 'path';
import {buildConfig, sequenceTask} from 'gngt-build-tools';

const {packagesDir} = buildConfig;

/** Path to the dev-app-mat source directory. */
const devApppSource = join(packagesDir, 'dev-app-mat');

/** Path to the tsconfig file that builds the AOT files. */
const tsconfigFile = join(devApppSource, 'tsconfig-aot.json');

/**
 * Build the dev-app-mat with the release output in order confirm that the library is
 * working with AOT compilation enabled.
 */
task('build-aot-mat', sequenceTask(
  'clean',
  ['build-aot-mat:release-packages', 'build-aot-mat:assets'],
  'build-aot-mat:compiler-cli'
));

/**
 * Task that can be used to build the dev-app-mat with AOT without building the
 * release output. This can be run if the release output is already built.
 */
task('build-aot-mat:no-release-build',
  sequenceTask('build-aot-mat:assets', 'build-aot-mat:compiler-cli'));

/** Builds the dev-app-mat assets and builds the required release packages. */
task('build-aot-mat:release-packages', sequenceTask(
  [
    'core:build-release',
    'material:build-release',
    'material-examples:build-release',
  ],
));

/**
 * Task that builds the assets which are required for building with AOT. Since the dev-app-mat uses
 * Sass files, we need to provide the transpiled CSS sources in the package output.
 */
task('build-aot-mat:assets', [':build:devapp-mat:assets', ':build:devapp-mat:scss']);

/** Build the dev-app-mat and a release to confirm that the library is AOT-compatible. */
task('build-aot-mat:compiler-cli', execNodeTask(
  '@angular/compiler-cli', 'ngc', ['-p', tsconfigFile]
));
