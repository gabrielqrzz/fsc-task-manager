const {
  validatePassword,
  validateTitle,
  validateDescription,
  validateStatus,
  validateTimePeriod,
  validateTask,
} = require('../../src/utils/validators')

describe('Validações de tarefa e senha', () => {
  // SENHA
  test('Senha válida', () => {
    expect(validatePassword('123456')).toBe(true)
  })

  test('Senha muito curta', () => {
    expect(validatePassword('123')).toBe(false)
  })

  test('Senha muito longa', () => {
    expect(validatePassword('a'.repeat(21))).toBe(false)
  })

  // TÍTULO
  test('Título válido', () => {
    expect(validateTitle('Estudar Cypress')).toBe(true)
  })

  test('Título vazio', () => {
    expect(validateTitle('')).toBe(false)
  })

  test('Título com espaços apenas', () => {
    expect(validateTitle('   ')).toBe(false)
  })

  // DESCRIÇÃO
  test('Descrição válida', () => {
    expect(validateDescription('Testar o botão de salvar')).toBe(true)
  })

  test('Descrição vazia', () => {
    expect(validateDescription('')).toBe(false)
  })

  test('Descrição com espaços apenas', () => {
    expect(validateDescription('     ')).toBe(false)
  })
})

// STATUS
test('Status válido', () => {
  expect(validateStatus('in_progress')).toBe(true)
})

test('Status inválido', () => {
  expect(validateStatus('cancelled')).toBe(false)
})

// PERÍODO
test('Período válido', () => {
  expect(validateTimePeriod('morning')).toBe(true)
})

test('Período inválido', () => {
  expect(validateTimePeriod('dawn')).toBe(false)
})

// TAREFA COMPLETA
test('Tarefa válida', () => {
  const task = {
    title: 'Estudar',
    description: 'Estudar para prova',
    status: 'not_started',
    time: 'afternoon',
  }
  expect(validateTask(task)).toBe(true)
})

test('Tarefa inválida (sem título)', () => {
  const task = {
    title: '',
    description: 'Falta o título',
    status: 'not_started',
    time: 'afternoon',
  }
  expect(validateTask(task)).toBe(false)
})
