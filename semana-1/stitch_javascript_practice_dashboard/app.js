// Greeting
const nameInput = document.querySelector('input[placeholder="Enter your name..."]');
const greetBtn = document.querySelector('button:has(span + text)');
const greetOutput = document.querySelector('.border-dashed');

// Counter
const counterValue = document.querySelector('.text-4xl');
const decrementBtn = counterValue.closest('div').nextElementSibling.children[0];
const resetBtn = counterValue.closest('div').nextElementSibling.children[1];
const incrementBtn = counterValue.closest('div').nextElementSibling.children[2];

// Age validator
const ageInput = document.querySelector('input[type="number"]');
const ageBtn = ageInput.closest('div').querySelector('button');
const ageResult = ageInput.closest('div').querySelector('div.hidden');

// Theme
const themeBtn = document.querySelector('header button');
const themeSwitch = document.querySelector('input[type="checkbox"]');

// Logger
const logTextarea = document.querySelector('textarea');
const logBtn = logTextarea.closest('div').querySelector('button');
const logOutput = document.querySelector('.logger-scroll');
const clearBtn = document.querySelector('span.cursor-pointer');
