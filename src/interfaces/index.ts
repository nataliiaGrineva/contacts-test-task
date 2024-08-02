interface IFieldsItem {
  label: string;
  modifier: string;
  value: string;
  is_primary?: boolean;
}

export interface ITag {
  id: string;
  tag: string;
}

interface IContactFields {
  email?: IFieldsItem[];
  "first name"?: IFieldsItem[];
  "last name"?: IFieldsItem[];
}

export interface IContact {
  id: string;
  avatar_url: string;
  tags: ITag[];
  fields: IContactFields;
}

export interface ICreateContactPayload {
  record_type: string;
  privacy: {
    edit: null;
    read: null;
  };
  owner_id: null;
  fields: {
    "first name"?: IFieldsItem[];
    "last name"?: IFieldsItem[];
    email: IFieldsItem[];
  };
}

export interface IContactsResponse {
  resources: IContact[];
}
