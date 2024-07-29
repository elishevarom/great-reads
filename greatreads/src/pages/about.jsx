import { Container, Row, Col, Card } from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const backgroundImageStyle = {
  top: 0,
  left: 0,
  // zIndex: -1,
  backgroundImage: 'url(blankpages.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100vw',
  // height: '100vh'
};

export function About() {
    return(
        <Container className="text-center my-5">
          <div>
            <div>
              <Helmet>
                <title>Great Reads - About Us</title>
                <meta name="keywords" content="children's books, storybook, storytime, book reviews, good stories, kids book, free access, stories, story, reading level, elementary, preschool, middle school" />
                <meta property="og:title" content="Great Reads-About Us"/>
                <meta property="og:description" content="Learn about the founders and their love for reading and storytelling." />
              </Helmet>
            </div>
            <Row className="justify-content-center">
                <Col md={10}>
                <Card>
                  <Card.Header as="h5" className="text-center">About Us</Card.Header>
                  <Card.Text>
                    Welcome to <strong>Great Reads</strong>, your go-to resource for information on elementary-aged children's books! 
                    Whether you're a parent, teacher, or young reader, our site provides comprehensive details about a wide range of books, including titles, 
                    authors, ratings, intended age ranges, and genres.
                  </Card.Text>
                  <Card.Text as="h4" className="mt-4 mb-3">Our Story</Card.Text>
                  <Card.Text>
                    In the vibrant heart of a small town, three friends, Menucha, Miriam, and Leora, shared a passion for children's literature. Menucha, 
                    a dedicated elementary school teacher, spent her days reading enchanting stories to her students, witnessing firsthand the magic of books in sparking young imaginations. 
                    Miriam, a tech-savvy librarian, had always dreamed of combining her love for storytelling with her skills in web development. Leora, a children's book author, brought her unique 
                    perspective on the creative process and the importance of stories in a child's development.
                    One sunny afternoon, while browsing the shelves of their favorite local bookstore, the trio struck up a conversation about the challenge of finding reliable, 
                    detailed information about children's books. They reminisced about their own childhoods, filled with the adventures of beloved characters and the joy of discovering new stories. 
                    This shared nostalgia planted the seed for an idea: a website dedicated to providing comprehensive information about children's books.
                    Over cups of hot cocoa, they brainstormed how their website could cater to both parents and educators. They envisioned a platform where users could create new book entries, 
                    see detailed information about specific books, update book details, and even delete outdated entries. The goal was to make it easier for everyone to find and share the best reads for 
                    elementary-aged children. 
                    Naming their website 'Great Reads,' they set out to build a community where users could add reviews, helping others to discover hidden gems and avoid lackluster reads. 
                    Menucha's extensive knowledge of children's literature, Miriam's technical expertise, and Leora's creative insights made them the perfect team. However, they soon realized they needed 
                    someone with a strong background in web design to bring their vision to life.
                    Enter Zack, a seasoned web designer who had made a name for himself in the local tech scene. Though not part of their original friend group, Zack shared their passion for storytelling 
                    and recognized the potential of 'Great Reads.' With his help, they transformed their ideas into a visually appealing and user-friendly website. Zack's technical skills and design sensibilities 
                    were the perfect complement to the team's literary expertise.
                    The website launched with an impressive catalog of classic and contemporary children's books, each entry meticulously curated with detailed descriptions, author backgrounds, and age-appropriate 
                    ratings. Users quickly embraced the platform, appreciating its user-friendly interface and the wealth of information it offered. Teachers found it an invaluable resource for lesson planning, while 
                    parents loved discovering new books to share with their children at bedtime.
                    Menucha, Miriam, Leora, and Zack's collaboration turned 'Great Reads' into the go-to destination for anyone seeking the best in children's literature. Their journey was a testament to the 
                    power of books and the stories they tell, a celebration of the endless possibilities that lie within the pages of a good book.
                  </Card.Text>
                  <Card.Body>
                  <Card.Text as="h4" className="mt-4 mb-3">Our Vision</Card.Text>
                  <Card.Text>
                    Great Reads was born out of a passion for storytelling and a desire to make quality children's literature accessible to everyone. 
                    We understand the impact that a good book can have on a child's development and strive to provide a platform where every child can find a story that resonates with them.
                  </Card.Text>
                  <Card.Text as="h4" className="mt-4 mb-3">Join Us</Card.Text>
                  <Card.Text>
                    We invite you to explore our website and join our community of readers. Whether you're a parent looking for the next great read for your child, a teacher seeking educational resources, or a young reader eager for new adventures, Great Reads is here for you.
                  </Card.Text>
                    <Card.Text className="text-center mt-4">
                    Happy Reading!
                  </Card.Text>
                  <Card.Text className="text-center">
                    The Great Reads Team
                  </Card.Text>
                <Row>
                <Col md={3}>
                    <Card>
                      <Card.Body>
                        <Card.Title className="h6 mb-0 text-center">Zack O'Connell</Card.Title>
                        <Card.Text className="text-muted text-center">Co-founder & CFO</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card>
                      <Card.Body>
                        <Card.Title className="h6 mb-0 text-center">Menucha Rooshanshad</Card.Title>
                        <Card.Text className="text-muted text-center">Co-founder & CEO</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card>
                      <Card.Body>
                        <Card.Title className="h6 mb-0 text-center">Leora Samuels</Card.Title>
                        <Card.Text className="text-muted text-center">Co-founder & CIO</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card>
                      <Card.Body>
                        <Card.Title className="h6 mb-0 text-center">Miriam Wetstein</Card.Title>
                        <Card.Text className="text-muted text-center">Co-founder & COO</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                </Card.Body>
              </Card>
              </Col>
          </Row>
        </div>
      </Container>
  )
}


