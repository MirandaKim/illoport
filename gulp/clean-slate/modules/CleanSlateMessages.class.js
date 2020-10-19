
/****************************************************/
/*                                                 */
/*   Clean-Slate Messages (CleanSlateMessages.class.js)
/*                                               */
/************************************************/
/*

  - Log messages to the console.
  - These are intened to be run along side the CleanSlate module functions thorugh a third module.
    Ex:
      CleanSlateMessages.logExecuteMessage();
      CleanSlate.execute();
      CleanSlateMessages.logCompletionMessage();

  *************
  * Contents: *
  *************

  # Constructor

  # Public
    > Log Summary Message
    > Log Execute Message
    > Log Completion Message
    > Log What's Next Message

  # Export

*/

class CleanSlateMessages {

  /**************************************/
  /*   # Constructor                   */
  /************************************/


  constructor(command, description = ''){
    this.command = command.toLowerCase();
    this.commandTitled = command.charAt(0).toUpperCase() + command.slice(1);
    this.description = description.length < 1 ? `${command} version` : description;
  }

  /**************************************/
  /*   # Public                        */
  /************************************/

  /***************************
  *  > Log Summary Message   *
  ***************************/

  logSummaryMessage(){
    console.log(`
      --------------------
      The Clean-Slate ${this.commandTitled}
      --------------------
      The Clean-Slate Full task is designed to swap out existing source files for the ${this.description}.
      - To view the templates that will be used, look under the directory ~/gulp/clean-slate/templates
      - For more information open ~/gulp/clean-slate/README.md
      - Existing files will be relocated to ~/.trashed
      --------
      Commands
      --------
      run task: gulp ${this.command} (this will give you this summary message)
      run task: gulp ${this.command} --html (this will swap out only html)
      run task: gulp ${this.command} --css (this will swap out only css)
      run task: gulp ${this.command} --html --css  (this will swap out both html and css)
      `);
  }

  /***************************
  *  > Log Execute Message   *
  ***************************/

  logExecuteMessage(){
    console.log(`
      ---------------------------------------
      -- The Clean-Slate -- ${this.commandTitled} -- STARTING...
      ---------------------------------------
      Please wait while files are being moved and copied...
     `);
  }

  /******************************
  *  > Log Completion Message   *
  ******************************/

  logCompletionMessage(){
    console.log(`
      ------------------------------------------
      -- The Clean-Slate -- ${this.commandTitled} -- COMPLETE --
      ------------------------------------------
      Check ~/.trashed for your original files if you ran this command by mistake.
     `);
  }

  /*******************************
  *  > Log What's Next Message   *
  *******************************/

  logWhatsNextMessage(){
    console.log(`
      ------------------
      -- What's Next? --
      ------------------
      To see your changes
      - run the task 'gulp dev' to process source files into the temporary development directory (~/tmp)
      - run the task 'gulp watch' to see your site in the browser
      - if you don't see your changes, try refreshing your browser (and possibly clearing your cache)
     `);
  }

}

/**************************************/
/*   # Export                        */
/************************************/

module.exports = CleanSlateMessages;
