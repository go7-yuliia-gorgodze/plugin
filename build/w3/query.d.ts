import { String } from "./types";
import { Client, PluginModule, MaybeAsync } from "@web3api/core-js";
export interface Input_sampleQuery extends Record<string, unknown> {
    data: String;
}
export interface Module extends PluginModule {
    sampleQuery(input: Input_sampleQuery, client: Client): MaybeAsync<String>;
}
