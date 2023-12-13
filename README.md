Meals To Go
Setting up full build
Go to functions folder
Make sure you have node 16 running or later (if later update the engine in package.json)
Run yarn
Login to firebase firebase login
Set the correct project name in firebase.json
Copy your firebase config and paste it in App.js so it connects to the right firebase app
Create a .runtimeconfig.json with
{
    "stripe": {
        "key": "<empty>"
    },
    "google": {
        "key": "<empty>"
    }
}
Run yarn serve in the firebase folder
Run the Expo app
Make sure env.js is set to mock mode real keys you want to test with (default to true on master).
