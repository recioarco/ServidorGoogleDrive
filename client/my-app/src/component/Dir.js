import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CloudArrowUpFill, FolderPlus } from 'react-bootstrap-icons';
import FormModal from './FormModal';
import PathForm from './forms/PathForm';
import FilesForm from './forms/FilesForm';
import MkDirForm from './forms/MkDirForm';
import Directory from './Directory';
import api from '../api/api';
import Loading from './Loading';

class Dir extends Component {
    constructor(props) {
        super();
        this.state = {
            loading: true,
            dir: {}
        };
    }

    componentDidMount() {
        this.loadContent();
    }

    reload() {
        this.setState({ loading: true});
        this.loadContent();
    }

    async loadContent() {
        try {
            const dir = await api.getContent(this.props.match.params.path || '');
            this.setState({ loading: false, dir });
        } catch (e) {
            console.log(e);
        }
    }

    fillEntries() {
        if (this.state.loading) {
            return <Loading text="Loading..."/>;
        }

        const content = this.state.dir.content;
        const path = this.props.match.params.path;

        const directories = [
            <Directory 
                name="Up a dir..."
                key="parent"
                isDirectory
                parentDirectory
                path={path}
            />,
        ];

        content.directories.forEach((dir) => 
            directorieas.push(<Directory name={} isDirectory key={dir} path={path}/>)
        );

        const files = content.files.map((file) => (
            <Directory name={file} key={file} path={path}/>
        ));

        return [...directories, ...files];
    }

    render() {
        const rowProps = {className: 'mx-auto mb-3' };
        const iconStyle = {color: '#FFF', size: 24, classNmae: 'ml-2'};
        const path = this.props.match.params.path;

        return (
            <Container>
                <Row>
                    <PathForm path={path}/>
                </Row>
                <h1 className="text-center">Content</h1>
                <Row {...rowProps}>
                    <Col>
                    <FormModal
                        btn="primary"
                        title="Upload Files"
                        icon={<CloudArrowUpFill {...iconStyle}/>}
                    >
                        <FilesForm uploadTo={path} reload={() => this.reload()} />
                    </FormModal>
                    </Col>
                </Row>
                <Row {...rowProps}>
                    <Col>
                        <FormModal
                            btn="succes"
                            title="Create Directory"
                            icon={<FolderPlus {...iconStyle}/>}
                        >
                            <MkDirForm path={path} reload={() => this.reload()}/>
                        </FormModal>
                    </Col>
                </Row>
                <Row {...rowProps}>
                    {this.fillEntries()}
                </Row>
            </Container>
        );
    }
}

export default Dir;