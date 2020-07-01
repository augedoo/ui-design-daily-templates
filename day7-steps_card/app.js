//vars
const nextBtn = document.getElementById('next-button');
const prevBtn = document.getElementById('prev-button');
const steps = document.querySelectorAll('.steps li');
const stepContents = document.querySelectorAll('.step-content');
let CURRENT_STEP = 1;

// Events
nextBtn.addEventListener('click', nextStep);
prevBtn.addEventListener('click', prevStep);
nextBtn.addEventListener('mouseup', onStepsCompleted);
document.addEventListener('DOMContentLoaded', loadStep);

// Load initial step
function loadStep() {
  toggleButtons(CURRENT_STEP);
  updateStepIndicator(CURRENT_STEP);
  getCurrentStepContent(CURRENT_STEP);
}

// Go to the next step
function nextStep() {
  // > Check if steps is completed
  if (CURRENT_STEP === steps.length) {
    return;
  } else {
    // > Increment step
    CURRENT_STEP++;
    toggleButtons(CURRENT_STEP);
    getCurrentStepContent(CURRENT_STEP);
    updateStepIndicator(CURRENT_STEP);
  }
}

// Go to the prev step
function prevStep() {
  // > Increment step
  CURRENT_STEP--;
  toggleButtons(CURRENT_STEP);
  getCurrentStepContent(CURRENT_STEP);
  updateStepIndicator(CURRENT_STEP);
}

// When steps is completed
function onStepsCompleted(e) {
  if (e.target.classList.contains('steps-complete')) {
    // TODO: Additional logic to execute when steps is complete.
    console.log('Steps Completed');

    resetSteps();
  }

  e.preventDefault();
  return;
}

const resetSteps = () => {
  // > Go back to the beginning
  CURRENT_STEP = 0;
  toggleButtons(CURRENT_STEP);
  getCurrentStepContent(CURRENT_STEP);
  updateStepIndicator(CURRENT_STEP);

  // TODO: Additional logic to reset steps process.

  // ! Hide the steps container after reset.
};

// Get the current step content
const getCurrentStepContent = (currentStep) => {
  stepContents.forEach((content) => {
    const contentNumber = parseInt(content.classList[1].split('-')[1]);
    if (contentNumber === currentStep) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
};

// Update step indicator based on current step
const updateStepIndicator = (currentStep) => {
  steps.forEach((step) => {
    // > Remove active class
    if (step.className.includes('active')) {
      step.classList.remove('active');
    }
    // > Get step number
    const stepNumber = parseInt(step.className.split('-')[1]);
    // > Make step active
    if (stepNumber === currentStep) step.classList.add('active');
  });
};

const toggleButtons = (currentStep) => {
  if (currentStep === 1) {
    prevBtn.style.display = 'none';
  } else if (currentStep === steps.length) {
    nextBtn.textContent = 'Get Started';
    nextBtn.classList.add('steps-complete');
  } else {
    prevBtn.style.display = 'inline';
    nextBtn.classList.remove('steps-complete');
    nextBtn.textContent = 'Next';
  }
};
