import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import { 
  FolderFill,
  FileEarmarkRichtext,
  Arrow90degLeft,
  FileArrowDownFill
  } from 'react-bootstrap-icons';



const DirCard = (props) => {

  const iconStyle = {color:'#61AFEF', size: 30};
  let icon = <FileEarmarkRichtext {...iconStyle}/>

  if (props.isDrirectory) {
    icon = <FolderFill {...iconStyle}/>
  }
  if (props.parentDirectory) {
    icon = <Arrow90degLeft {...iconStyle}/>
  }

  const path = prop.path ? `${props.path}-${props.name}` : props.name;
  const downloadLink = `${process.env.REACT_APP_API_URL}/download/${path}`;

  return (
    <Card>
      <Card.body>
        <Container>
          <Row>
            <Col xs = {props.isDrirectory ? '' :8 } style = {{padding: 0}}>
            <Card.Text style={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            }}>
              {icon}{props.name}
            </Card.Text>
            </Col>
            {props.isDrirectory ? (<></>) : (
              <Col 
                style ={{ padding: 0, cursor:'pointer'}}
                className="d-flex flex-row-reverse"
                onClick={() => saveAs(downloadLink,props.name)} 
              >
                <FileArrowDownFill {...iconStyle}/>
              </Col>
            )}
          </Row>
        </Container>
      </Card.body>
    </Card>
  );

}

const DirLink = (props) => {

    if (!props.isDirectory) {
        return <>{props.children}</>;
    }

    let link = `/content/${props.name}`;

    if (props.parentDirectory) {
        link = link.split('-').slice(0,-2).join('-') || '/content/';
    }

    return (
        <Link to={link} style={{textDecoration: 'none'}} className="text-light">
            {props.children}
        </Link>
    );
}

const Dirent = (props) => {
    if (!props.path && props.parentDirectory){
        return <></>;
    }

    return (
        <Col lg={4} xl={3} classNmae="mt-2">
            <DirLink {...props}>
                <DirCard {...props}/>
            </DirLink>
        </Col>
    );
}

export default Dirent;


