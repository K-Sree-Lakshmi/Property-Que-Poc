import React, { Component } from 'react'
import { Drawer, Button } from 'antd';
import BasicInformation from './BasicInformation';
import './AddTemplate.css';
import AddGroup from './AddGroup/AddGroup';
import AddPage from './AddPage/AddPage';
import AddSection from './AddSection/AddSection';

const screenKeys = ['Group', 'Page', 'Section']

export default class AddTemplate extends Component {
    state = { visible: false, childrenDrawer: false, screen: 'group' };

    showDrawer = (value) => {
        this.setState({
            screen: value,
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    showChildrenDrawer = () => {
        this.setState({
            childrenDrawer: true,
        });
    };

    onChildrenDrawerClose = () => {
        this.setState({
            childrenDrawer: false,
        });
    };

    renderComponent = () => {
        switch(this.state.screen){
            case screenKeys[0]:
                return  <AddGroup/>;
            case screenKeys[1] :
                return <AddPage/>;
            case screenKeys[2] :
                return <AddSection/>
            default:
                return;
        }

    }

    titleView = (value) => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p style={{margin: 5}}>{value}</p>
                <div style={{alignContent:'space-between'}}>
                    <Button style={{margin:5}}>
                        close
                     </Button>
                    <Button style={{margin:5}}>
                        save changes
                     </Button>
                </div>
            </div>
        )
    }

    render() {
        const { title } = this.props;
        return (
            <>
                <Button type="primary" onClick={() => {this.showDrawer('Section')}}>
                    Open drawer
          </Button>
                <Drawer
                    title={this.titleView(this.state.screen)}
                    width={'60%'}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <BasicInformation screenKey = {this.state.screen}/>
                   {this.renderComponent()}
                </Drawer>
            </>
        );
    } 
}