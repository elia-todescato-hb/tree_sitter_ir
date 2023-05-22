// just use this configuration file
module.exports = grammar(
  {
  // ...

  rules: {
    source_file: $ => repeat($._definition),

    _definition: $ => choice(
      $.function_definition
      // TODO: other kinds of definitions
    ),

    function_definition: $ => seq(
      'definisci',
      $.identifier,
      $.parameter_list,
      $._type,
      $.block
    ),

    parameter_list:$ => seq(
      '(',
       // TODO: parameters
      ')'
    ),
    primitive_type:$ => choice( 
        'bool',
        'int'
    ),

    _type:$ => choice(
      'bool'
      // TODO: other kinds of types
    ),
    
    array_type: $ => seq(
      '[',
      ']',
      $._type
    ),
    pointer_type: $ => seq(
      '*',
      $._type
    ),
    block: $ => seq(
      '{',
      repeat($._statement),
      '}'
    ),

    _statement: $ => choice(
      $.return_statement
      // TODO: other kinds of statements
    ),

    return_statement: $ => seq(
      'return',
      $._expression,
      ';'
    ),

    _expression: $ => choice(
      $.identifier,
      $.number
      // TODO: other kinds of expressions
    ),

    identifier: $ => /[a-z]+/,

    number: $ => /\d+/
  }
);
 

