# Vokabler
This is a vocabulary app for learning German

Updates: Version.2
- Bootstrap code has been implemented to create a responsive design
- The menu option links to a page where the user can input data into a form that will save the user entry. 
- The homepage has to be edited so that the information from the array of objects can be accessed and displayed to the user.





How it works: 
1. There are 4 types or words and each type is initialized with a unique constructor method that takes different attributes based on the characteristics of the wrod (german nouns take gender as an attribute while verbs take perfect/imperfect forms)
2. Words are entered manually into arrays using the object constructor methods defined for each word type e.g. verb(x,z,y)
3. Each word type has a toString override function that prints a preformatted output when each object is called 
4. All of the various arrays (nounArray, verbArray, etc) are pushed into one large array called tArray
5. When the user clicks the next or back button they incrementally iterate across the tArray which is composed of the other arrays of objects. tArray is an array of objects of varying word types because all word types were added to tArray (step 4)
6. The next and back buttons work by using a token (var pos) declared outside of the functions to mark array position. When the end of the array or a negative position is reached then an "end of array" message is printed 
7. The randomize button works by generating a random number and selecting an object from the tArray. It does work as I intended because it only selects and displays the object in the random position but the next and back buttons still rely on the var pos token to increment or decrement so that if user is at position 10 and clicks randomize he may be displayed object 26 but when they click "next" it increments the original token to 11 instead of random (26)+1  
8. When words are displayed they are shoved into an h1 inside of a div tag that causes a line break bug when verbs with multiple lines are displayed 

How it should work: 
1. Users can upload objects into the program using text boxes and a submit button 
  - System prompts user to select a word type to upload (noun, verb, etc)
    - User selects word type to upload 
  - System redirects user to correct page to upload words of user-specified type 

  - System prompts user to input data for each attribute required for an object of user-selected type 
    - User enters required information for word type (verb = infinitive, perfect, inperfect, english)
  - System verifies information for each box has been entered 
  -   System displays error message if field is blank -or- System displays confirmation message the word has been saved 
  - System saves information if all fields have been filled 
2. The system takes the user inputted data and passes this information into the constructor method of the user-specified word type to instantiate a new object of object type: verb, noun, adjective, conjunction 
3. Users can view their saved words in a table on a "list-page" and filter based on type or view their entire vocab list 
4. When users are on the home page they can click "next", "back" or "random"
5. Instead of calling the object directly and printing the toString method of the object, the eventHandler calls a function that: 
  - Increments/decrements/randomizes the position token
  - Calls the object at position[i]
  - Checks to see what type of word is being called 
  - Takes each of the attributes and inserts that attribute into the subheaders under the german text box
  - Takes the English definition attribute and adds that to the english text box subheader 
6. When the end of the array is reached both text boxes display buttons to add more vocab words 

Implementing the New Method of Adding Words: 
1. The object data is stored in an array of a single type:
  - Each array will contain individual words and each array will be saved as a record into local memory (4 records, 1/type)
  - The data will be serialized from JSON into a record using the JSON method (toJSON)
  - The data will be deserialized using JSON.parse 
3. Once data has been pulled from local storage each array will be saved and a new totalArray will all words will be created 
4. 


Targeted HTML Elements
1. English Text Box 
2. German Text Box
3. Next Button
4. Back Button 

Vocab Arrays 
1. nounArray
2. verbArray
3. adjArray
4. conjArray



Object Constructor Methods
1. Noun 
- de_g //German Gender
- de_s //German Singular
- de_p //Ge<br />rman Plural
- en //English Defintion

2. Verb
- de_inf; //German Infinitive
- de_per; //German Perfect
- de_imper; //German Imperfect
- en; //English Definition

3. Adjective
- de; //German Word
- en; // English Definition

4. Conjunction 
- de; //German Word
- en; //English Definition
- isSub; //boolean value to identify subordination conjunctions

