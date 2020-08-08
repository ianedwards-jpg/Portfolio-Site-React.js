import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';



class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Grid className="projects-grid">
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/project1.png) center / cover' }}>
                Movies and Munchies in Manhattan
                    </CardTitle>
              <CardText>
              Technologies Used: Vanilla Javascript, Ajax, UlKit CSS
              <CardActions border>
                <Button colored href='https://github.com/Team-KIA/Project-1' >Github</Button>
                <Button colored href='https://team-kia.github.io/Project-1/'>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </CardText>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'black', background: 'url(/img/projest2.png) center / cover' }}>
                Grocery Assistant 
               </CardTitle>
              <CardText>
              Technologies Used: Node.JS, Ajax, Bootstrap CSS
                  </CardText>
              <CardActions border>
                <Button colored href='https://github.com/ianedwards-jpg/Project-2-Please-Work-'>Github</Button>
                <Button colored href='https://ianedwards-jpg.github.io/Project-2-Please-Work-/'>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/employeeTracker_Node-JS.jpg) center / cover' }}>
                Employee Tracker
                 </CardTitle>
              <CardText>
                Technologies Used: Node.JS, MySQL
                </CardText>
              <CardActions border>
                <Button colored href='https://github.com/ianedwards-jpg/Project-2-Please-Work-'>Github</Button>
                <Button colored href='https://github.com/ianedwards-jpg/Project-2-Please-Work-'>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          {/* <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/project1.png) center / cover' }}>
                React Project #1
                    </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                   </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/projest2.png) center / cover' }}>
                React Project #2
               </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/dashboard.png) center / cover' }}>
                React Project #3
                 </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell> */}
        </Grid>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <Grid className="projects-grid">
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/BootStrap_CSS.jpg) center / cover' }}>
                Bootstrap CSS Webpage
                    </CardTitle>
              <CardText>
              Technologies Used: HTML5, Bootstrap CSS/JS
                   </CardText>
              <CardActions border>
                <Button href='https://github.com/ianedwards-jpg/Homework-2.github.io' colored>Github</Button>
                <Button href='https://ianedwards-jpg.github.io/Homework-2.github.io/' colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'black', background: 'url(/img/Password_Generator.jpg) center / cover' }}>
                Password Generator 
               </CardTitle>
              <CardText>
                Technologies Used: Bootstrap CSS, Vanilla Javascript
                  </CardText>
              <CardActions border>
                <Button colored href='https://github.com/ianedwards-jpg/Homework-3' >Github</Button>
                <Button colored href='https://ianedwards-jpg.github.io/Homework-3/'>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'black', background: 'url(/img/Ajax_API_app.jpg) center / cover' }}>
                Weather App
                 </CardTitle>
              <CardText>
                Technologies Used: Bootstrap CSS3, Vanilla Javascript, JQuery, Ajax
                </CardText>
              <CardActions border>
                <Button colored href='https://github.com/ianedwards-jpg/Homework-6-V2.github.io'>Github</Button>
                <Button colored href='https://ianedwards-jpg.github.io/Homework-6-V2.github.io/'>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
        </Grid>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <Grid className="projects-grid">
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/ReadMe_Generator-NodeJS.jpg) center / cover' }}>
                ReadMe Generator
                    </CardTitle>
              <CardText>
              Technologies Used: Node.JS, JQuery
                   </CardText>
              <CardActions border>
                <Button colored href='https://github.com/ianedwards-jpg/Homework-9-ReadMe-Generator.github.io'>Github</Button>
                <Button colored href='https://ianedwards-jpg.github.io/Homework-9-ReadMe-Generator.github.io/'>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'white', background: 'url(/img/employeeTracker_Node-JS.jpg) center / cover' }}>
                Employee Tracker
               </CardTitle>
              <CardText>
              Technologies Used: Node.JS, MySQL
                  </CardText>
              <CardActions border>
                <Button colored href='https://github.com/ianedwards-jpg/Homework-12.github.io'>Github</Button>
                <Button colored href='https://ianedwards-jpg.github.io/Homework-12.github.io/'>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ height: '176px', color: 'black', background: 'url(/img/react_table_photo.jpg) center / cover' }}>
               Employee Table- React JS
                 </CardTitle>
              <CardText>
                Technologies Used: React.JS, ReactTable Node.JS, Github Hosting
                </CardText>
              <CardActions border>
                <Button colored href='https://github.com/ianedwards-jpg/Homework-19'>Github</Button>
                <Button colored href='https://ianedwards-jpg.github.io/Homework-19/'>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
              </CardMenu>
            </Card>
          </Cell>
        </Grid>
      )
    } 
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Ajax/MySQL</Tab>
          <Tab>Vanilla JS/CSS</Tab>
          <Tab>Node.JS/React</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>



      </div>
    );
  }
}

export default Projects;