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

        </div>
      </div>
    );
  }
  