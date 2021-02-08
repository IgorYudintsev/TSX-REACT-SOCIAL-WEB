import React from 'react';

type propsType = {
    status: string
}

export class ProfileStatus extends React.Component <propsType> {
    state = {
        editMode: false,
    }

    //Это вроде и объект и вроде как стрелочн.функция...
    activateEditeMode = () => {
        //setState-асинхрон. функция
        this.setState(
            {
                editMode: true
            }
        )
    }

    deActivateEditeMode=()=>{
        this.setState({
                editMode:false
            }
        )
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <span onDoubleClick={this.activateEditeMode}>{this.props.status}</span>
                    : <input onBlur={this.deActivateEditeMode} autoFocus={true} value={this.props.status}/>
                }
            </div>
        )
    }
}