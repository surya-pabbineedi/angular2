export class LookupModel {
    name: string;
    fields: {
        label: string,
        name: string,
        type: string
    };
    resources: {
        list: string,
        create: string,
        update: string,
        delete: string
    }
}