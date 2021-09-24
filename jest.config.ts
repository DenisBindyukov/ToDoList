import type {Config} from "@jest/types";

const config: Config.InitialOptions = {
    verbose: true,
    preset: 'ts- jest',
    testEnvironment: 'node',
    coverageDirectory: '<rootDir>/coverage',
    setupFilesAfterEnv: [
        '<rootDir>/test/setup.ts',
        '<rootDir>/test/config.ts',
    ],
    moduleNameMapper: {
        '\\.(css)$': '<rootDir>/test/config.ts'
    },

    snapshotSerializers: [
        'enzyme-to-json/serializer'
    ]
};

export default config;