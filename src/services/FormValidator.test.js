import FormValidator from './FormValidator';

describe('FormValidator', () => {
  const testValidations = [
    { 
      field: 'number', 
      method: 'isEmpty', 
      validWhen: false, 
      message: 'Integer is required.' 
    },
    { 
      field: 'number',
      method: 'isInt',
      args: [{
        min: 0,
        allow_leading_zeroes: false,
      }],
      validWhen: true, 
      message: 'That is not a valid integer.'
    },
  ];
  
  const validator = new FormValidator(testValidations);

  it('should not crash', () => {
    validator.valid();
  });

  it('should return valid validation object', () => {
    const validation = validator.valid();

    expect(validation.isValid).toBe(true);
  });

  //TODO: add more unit tests...
});
