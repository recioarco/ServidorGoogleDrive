import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from '../Loading';
import api from '../../api/api';

class MkDirForm extends Component {
    constructor(props) {
        super();
        this.state = {name: '', creating: false, showAlert: false, alert:{}};
    }

    onChange(e) {
        this.setState({ name: e.target.value });
    }

    showAlert(alert) {
        if (this.state.showAlert) {
            return (
                <Alert
                    alert={alert}
                    onClose={() => this.setState({ showElert:false })}
                />
            );
        }
    }

    async onSubmit(e) {
        e.preventDefault();
        this.setState({ creating: true});
        let response = {};

        try {
            response = await api.mkDir(this.props.path || '', this.state.name);
            this.props.reload();
        } catch (e) {
            response = e;
            console.log(e);
        }
        this.setState({ creating: false, showAlert: true, alert: response });
    }

    render() {
        if (this.state.creating) {
            return (
                <Loading title="Creating directory..." text="Creating directory..." />
            );
        }

        return (
            <>
            {this.showAlert(this.state.alert)}
            <Form onSubmit={(e) => this.onSubmit(e)}>
                <Form.Group controlId="mkdir">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        className="mb-2"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={(e) => this.onChange(e)}
                    />
                    <Button size="lg" varient="success" type="submit">Create</Button>
                </Form.Group>
            </Form>
            </>
        );
    }
}

export default MkDirForm;