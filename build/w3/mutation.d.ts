import { Bytes, Boolean } from "./types";
import { Client, PluginModule, MaybeAsync } from "@web3api/core-js";
export interface Input_sampleMutation extends Record<string, unknown> {
    data: Bytes;
}
export interface Module extends PluginModule {
    sampleMutation(input: Input_sampleMutation, client: Client): MaybeAsync<Boolean>;
}
