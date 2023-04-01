import { Module } from "../core/module";
import { ModuleSchema } from "../core/module.schema";
export declare class UserModule extends Module {
    name: string;
    schema: ModuleSchema;
    constructor(yin: any, controller: any);
    create(object: any, user?: any): Promise<any>;
    authPassword(tel: string, password: string): Promise<any>;
    auth(id?: string): Promise<any>;
}
