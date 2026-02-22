The UI: Build a form that is broken into 3 separate views/components:

Step 1: Personal Info (First Name, Last Name, Date of Birth).

Step 2: Account Details (Email, Password, Confirm Password).

Step 3: Review & Submit (Display all entered data so the user can check it).

The Navigation: Add "Next" and "Back" buttons to move between steps.

The State: Use React State (useState) in a Parent component to hold the data from all 3 steps. If I type my name in Step 1, go to Step 2, and click "Back", my name should still be there!

Submission: On Step 3, clicking "Submit" should console.log() the final data object and show a "Success!" screen.

Real-Time Validation: Don't wait for the user to click "Submit" to tell them they made a mistake.

If the email doesn't have an @ symbol, show a red error text below the input as they type.

Password must be at least 8 characters.

"Confirm Password" must exactly match "Password".

Disabled Buttons: The "Next" button should be disabled (unclickable) until all fields in the current step are valid.

UX Toggle: Add a "Show/Hide Password" eyeball icon inside the password inputs.

Progress Bar: Add a visual progress bar at the top (e.g., "Step 2 of 3").
