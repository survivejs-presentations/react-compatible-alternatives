// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  survivejs: require("../images/survivejs.png")
}, v => v.replace('/', ''));

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              React Compatible Alternatives
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              <Link href="https://preactjs.com/">Preact</Link>
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <b>Preact</b> Briefly
            </Heading>
            <List>
              <Appear><ListItem>9k (minified) alternative to React with the same ES2015 API</ListItem></Appear>
              <Appear><ListItem>No <code>React.createClass</code> or <code>propTypes</code> by default!</ListItem></Appear>
              <Appear><ListItem>Works with JSX after adjusting</ListItem></Appear>
              <Appear><ListItem><code>{`<input value={text} onInput={this.linkState('text')} />`}</code></ListItem></Appear>
              <Appear><ListItem><Link href="https://www.npmjs.com/package/preact-compat">preact-compat</Link> - React compatibility layer (more APIs including <code>createClass</code> and <code>propTypes</code>)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={4}>
              Minimal Configuration
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/preact_config.js")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              <Link href="https://www.npmjs.com/package/react-lite">react-lite</Link>
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <b>react-lite</b> Briefly
            </Heading>
            <List>
              <Appear><ListItem>25k (minified) alternative to React with the same ES2015 API including <code>React.createClass</code></ListItem></Appear>
              <Appear><ListItem>No <code>propTypes</code>!</ListItem></Appear>
              <Appear><ListItem>Works only with JSX toolchain</ListItem></Appear>
              <Appear><ListItem><b>react-tap-event-plugin</b> and <b>transform-react-inline-elements</b> gotchas</ListItem></Appear>
              <Appear><ListItem>Use as a production level replacement for client side React</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              <Link href="https://www.npmjs.com/package/inferno">Inferno</Link>
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <b>Inferno</b> Briefly
            </Heading>
            <List>
              <Appear><ListItem>Performance oriented evolution over React - diffs only dynamic values</ListItem></Appear>
              <Appear><ListItem>Similar ES2015 API as in React</ListItem></Appear>
              <Appear><ListItem>Universal rendering supported</ListItem></Appear>
              <Appear><ListItem>More powerful stateless components than in React thanks to hooks</ListItem></Appear>
              <Appear><ListItem><Link href="https://www.npmjs.com/package/inferno-compat">inferno-compat</Link></ListItem></Appear>
              <Appear><ListItem>Still work in progress (no 1.0 yet)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              Comparison
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Layout>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeaderItem>Preact</TableHeaderItem>
                    <TableHeaderItem>react-lite</TableHeaderItem>
                    <TableHeaderItem>Inferno</TableHeaderItem>
                  </TableRow>
                </thead>
                <tbody>
                  <TableRow>
                    <TableItem>9k</TableItem>
                    <TableItem>25k</TableItem>
                    <TableItem>4k</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>ES2015 + <b>compat</b></TableItem>
                    <TableItem>ES2015</TableItem>
                    <TableItem>ES2015 + <b>compat</b></TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Universal rendering</TableItem>
                    <TableItem>No universal rendering</TableItem>
                    <TableItem>Universal rendering</TableItem>
                  </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>

          <Slide transition={slideTransition}>
            <Link href="http://www.survivejs.com/">
              <Heading size={1}>
                SurviveJS
              </Heading>
            </Link>
            <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading size={1} caps fit textColor="primary">
              Made in Finland by
            </Heading>
            <Link href="https://twitter.com/bebraw">
              <Heading caps fit size={2} textColor="secondary">
                Juho Vepsäläinen
              </Heading>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
