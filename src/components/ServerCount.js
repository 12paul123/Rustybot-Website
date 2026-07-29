import React from 'react'

class ServerCount extends React.Component {
    static propTypes = {
        client:PropTypes.object.isRequired,
    };
    
    render () {
        const {client} = this.props;
        return (
            <div>
                Server count: {client.guilds.size}
            </div>
        )
    }
}

export default ServerCount