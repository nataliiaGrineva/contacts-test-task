import { prepareContactPayload } from '../prepareContactPayload'

describe('prepareContactPayload', () => {
  it('should transform the formData correctly', () => {
    const formData = {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'JANE.SMITH@EXAMPLE.COM'
    };

    const result = prepareContactPayload(formData);

    expect(result).toEqual({
      record_type: 'person',
      privacy: {
        edit: null,
        read: null,
      },
      owner_id: null,
      fields: {
        'first name': [
          { value: 'Jane', modifier: '', label: 'first name' },
        ],
        'last name': [
          { value: 'Smith', modifier: '', label: 'last name' },
        ],
        email: [
          { value: 'jane.smith@example.com', modifier: '', label: 'email' },
        ],
      },
    });
  });

  it('should use default values for empty fields', () => {
    const formData = {
      firstName: '',
      lastName: '',
      email: ''
    };

    const result = prepareContactPayload(formData);

    expect(result).toEqual({
      record_type: 'person',
      privacy: {
        edit: null,
        read: null,
      },
      owner_id: null,
      fields: {
        'first name': [
          { value: 'John', modifier: '', label: 'first name' },
        ],
        'last name': [
          { value: 'Doe', modifier: '', label: 'last name' },
        ],
        email: [
          { value: '', modifier: '', label: 'email' },
        ],
      },
    });
  });

  it('should trim and lowercase the email', () => {
    const formData = {
      firstName: 'Alice',
      lastName: 'Doe',
      email: ' ALICE.DOE@EXAMPLE.COM '
    };

    const result = prepareContactPayload(formData);

    expect(result.fields.email[0].value).toBe('alice.doe@example.com');
  });
});
