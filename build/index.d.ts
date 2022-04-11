import { Plugin, PluginFactory, PluginPackageManifest, PluginModules } from "@web3api/core-js";
export interface SamplePluginConfig {
    defaultValue: string;
}
export declare class SamplePlugin extends Plugin {
    private _config;
    constructor(_config: SamplePluginConfig);
    static manifest(): PluginPackageManifest;
    getModules(): PluginModules;
    sampleQuery(data: string): Promise<string>;
    sampleMutation(data: Uint8Array): boolean;
}
export declare const samplePlugin: PluginFactory<SamplePluginConfig>;
export declare const plugin: PluginFactory<SamplePluginConfig>;
