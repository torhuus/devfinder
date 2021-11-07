import React from 'react';

function UserInformation(props) {
    return (
        <main>
            <div>
                <div className="image"></div>
                <div className="mainInfo">
                    <h2>The Octocat</h2>
                    <a href="#">@octocat</a>
                    <small>Joined 25 Jan 2011</small>
                </div>
            </div>
            <div>Description from user's github profile</div>
            <div>stats stats stats</div>
            <div>Link link link link</div>
        </main>
    );
}

export default UserInformation;