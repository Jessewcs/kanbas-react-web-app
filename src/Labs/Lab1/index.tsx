export default function Lab1() {
    return (
      <div id="wd-lab1">
        <h2>Lab 1</h2>
        <h3>HTML Examples</h3>
        <div id="wd-h-tag">
          <h4>Heading Tags</h4>
            <h4>Paragraphs</h4>
            <p id="wd-p1">
            This is the first paragraph. The paragraph tag is used to format
            vertical gaps between long pieces of text like this one.
            </p>
            <p id="wd-p2">
            This is the second paragraph. Even though there is a deliberate white
            gap between the paragraph above and this paragraph, by default
            browsers render them as one contiguous piece of text as shown here on
            the right.
            </p>
            <p id="wd-p3">
            This is the third paragraph. Wrap each paragraph with the paragraph
            tag to tell browsers to render the gaps.
            </p>

        <div id="wd-lists">
            <h4>List Tags</h4>
            <h5>Ordered List Tag</h5>
            How to make pancakes:
            <ol id='wd-pancakes'>
                <li>Mix dry ingredients.</li>
                <li>Add wet ingredients.</li>
                <li>Stir to combine.</li>
                <li>Heat a skillet or griddle.</li>
                <li>Pour batter onto the skillet.</li>
                <li>Cook until bubbly on top.</li>
                <li>Flip and cook the other side.</li>
                <li>Serve and enjoy!</li>
            </ol>
            </div>


            <div id="wd-peanutbutterjelly">
            <h4>PeanutButterJelly</h4>
            How to make peanut butter jelly sandwich:
            <ol id='wd-peanutbuttjelly'>
                <li>Two Bread.</li>
                <li>Peanut butter on bread one.</li>
                <li>Jelly on bread two.</li>
                <li>Close bread</li>
            </ol>
            </div>

            <div id="wd-favoritebooks">
                <h4>Three Favorite Books</h4>
                <h5>Unordered List Tag</h5>
            My favorite books (in no particular order)
            <ul id="wd-my-books">
                <li>Holes</li>
                <li>Hunger Games</li>
                <li>Divergent</li>
            </ul>
            </div>

        <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>95</td>
            </tr>
            <tr>
                <td>Q10</td>
                <td>HTML</td>
                <td>2/17/21</td>
                <td>85</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>

        <div id="wd-images">
            <h4>Image tag</h4>
            Loading an image from the internet:
            <br />
            <img id="wd-starship"
                width="400px"
            src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
            />
            <br />
            Loading a local image:
            <br />
            <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
        </div>

        <div id="wd-forms">
            <h4>Form Elements</h4>
            <form id="wd-text-fields">
                <h5>Text Fields</h5>
                <label htmlFor="wd-text-fields-username"> Username:</label>
                <input id="wd-text-fields-username" placeholder="Username" /> <br />
                <label htmlFor="wd-text-fieldspassword">Password:</label>
                <input type="password" id="wd-text-fields-password" value="123@#$%asd"/> <br />
                <label htmlFor="wd-text-fields-first-name">First Name:</label>
                <input id="wd-text-fields-first-name" placeholder="First Name" /> <br />
                <label id="wd-text-fields-last-name">Last Name:</label>
                <input id="wd-text-fields-last-name" placeholder="Last Name" title="The last name" /> 
            </form>
        </div>

        <h5>Text Boxes</h5>
        <label>Biography:</label><br/>
        <textarea id="wd-textarea" cols={30} rows={10}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</textarea>

        <h5 id="wd-buttons">Buttons</h5>
        <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
            Hello World!
        </button>

        <h5>File Upload</h5>
        <input id="wd-upload" type="file"/>

        <h4 id="wd-radio-buttons">Radio Buttons</h4>
        <label>Favorite Movie Genre:</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-comedy"/>
        <label htmlFor="wd-radio-comedy">Comedy</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-drama"/>
        <label htmlFor="wd-radio-drama">Drama</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-scifi"/>
        <label htmlFor="wd-radio-scifi">Science Fiction</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
        <label htmlFor="wd-radio-fantasy">Fantasy</label><br />

        <h5 id="wd-checkboxes">Checkboxes</h5>
        <label>Favorite Movie Genre:</label><br />

        <input type="checkbox" name="check-genre" id="wd-check-comedy"/>
        <label htmlFor="wd-check-comedy">Comedy</label><br />

        <input type="checkbox" name="check-genre" id="wd-check-drama"/>
        <label htmlFor="wd-check-drama">Drama</label><br />

        <input type="checkbox" name="check-genre" id="wd-check-scifi"/>
        <label htmlFor="wd-check-scifi">Science Ficition</label><br />

        <input type="checkbox" name="check-genre" id="wd-check-fantasy"/>
        <label htmlFor="wd-check-fantasy">Fantasy</label>

        <h3 id="wd-dropdowns">Dropdowns</h3>

        <h4>Select one</h4>
        <label htmlFor="wd-select-one-genre">Favorite Movie Genre:</label><br />
        <select id="wd-select-one-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
        </select>

        <h4>Select many</h4>
        <label htmlFor="wd-select-many">Favorite Movie Genre:</label><br />
        <select multiple id="wd-select many">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">Science Fiction</option>
            <option selected value="FANTASY">Fantasy</option>
        </select>

        <h3>Other HTML Field Types</h3>

        <label htmlFor="wd-text-fields-email">Email:</label>
        <input type="email" placeholder="user@somewhere.com" id="wd-text-fields-email"/><br />
        
        <label htmlFor="wd-text-fields-salary">Starting salary:</label>
        <input type="number" id="wd-text-fields-salary" placeholder="1000" value="100000"/><br />

        <label htmlFor="wd-text-fields-rating">Rating:</label>
        <input type="range" id="wd-text-fields-rating" placeholder="Doe" max="5" value="4"/><br />

        <label htmlFor="wd-text-fields-dob">Date of birth:</label>
        <input type="date" id="wd-text-fields-dob" value="2000-01-21"/><br />


        <h4>Anchor Tag</h4>
        Please <a id="wd-lipsum" href="https://www.lipsum.com">click here</a> to get dummy text!<br />
        Also, to access my GitHub code repository, please <a id="wd-github" href="https://github.com/Jessewcs/kanbas-react-web-app.git">click here!</a><br />


        </div>
      </div>
    );
  }
  