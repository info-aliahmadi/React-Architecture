import React from 'react';


// Default behaviour for the Permission Provider Context
// i.e. if for whatever reason the consumer is used outside of a provider
// The permission will not be granted if no provider says otherwise
var defaultBehaviour = {
    isAllowedTo: function () { return Promise.resolve(false); }
};

// Create the context
var PermissionContext = React.createContext(defaultBehaviour);

export default PermissionContext;
 