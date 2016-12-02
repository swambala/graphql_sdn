const graphql = require('graphql');
const NetworkDevices = require('./datas').default;

const NetworkDevice_DataType = new graphql.GraphQLObjectType({
  name: 'NetworkDevice',
  description:'Data Type Declaration For The NetworkDevice',
  fields: function () {
    return {
      location:{
        type:graphql.GraphQLString,
        description: 'Location ID that is associated with the device',
             },
     type: {
        type: graphql.GraphQLString,
        description: 'Type of device as switch, router, wireless lan controller, accesspoints.',
      },

      serialNumber: {
        type: graphql.GraphQLString,
        description: 'Serial number of device.',
      },

     family: {
      type:  graphql.GraphQLString,
        description: 'Family of device as switch, router, wireless lan controller, accesspoints.',
      },

     lastUpdated: {
      type:  graphql.GraphQLString,
        description: 'Time when the network device info last got updated.',
      },

     role: {
      type:  graphql.GraphQLString,
        description: 'Role of device as access, distribution, border router, core.',
      },

    upTime: {
      type:  graphql.GraphQLString,
        description: 'Time that shows for how long the device has been up.',
      },

     macAddress: {
      type:  graphql.GraphQLString,
        description: 'MAC address of device.',
      },

      softwareVersion: {
      type:  graphql.GraphQLString,
        description: 'Software version on the device.',
      },

    inventoryStatusDetail: {
      type:  graphql.GraphQLString,
        description: ' Status detail of inventory sync.',
      },

    lastUpdateTime: {
      type:  graphql.GraphQLString,
        description: ' Last updated time of the device.',
      },

    locationName: {
      type:  graphql.GraphQLString,
        description: ' Name of the associated location.',
      },

    tagCount: {
      type:  graphql.GraphQLString,
        description: ' Number of tags associated with the device.',
      },

     hostname: {
      type:  graphql.GraphQLString,
        description: ' Device name.',
      },

     apManagerInterfaceIp: {
      type:  graphql.GraphQLString,
        description: 'IP address of WLC on AP manager interface.',
      },

     series: {
      type:  graphql.GraphQLString,
        description: 'Device series.',
      },

      bootDateTime: {
      type:  graphql.GraphQLString,
        description: 'Device boot time.',
      },

      collectionStatus: {
      type:  graphql.GraphQLString,
        description: 'Collection status as Synchronizing, Could not synchronize, Not manageable, Managed, Partial Collection Failure, Incomplete, Unreachable, Wrong credential, Reachable, In Progress.',
      },

      interfaceCount: {
      type:  graphql.GraphQLString,
        description: 'Number of interfaces on the device.',
      },

      lineCardCount: {
      type:  graphql.GraphQLString,
        description: 'Number of linecards on the device.',
      },

      lineCardId: {
      type:  graphql.GraphQLString,
        description: 'IDs of linecards of the device.',
      },

      managementIpAddress: {
      type:  graphql.GraphQLString,
        description: 'IP address of the device.',
      },

      memorySize: {
      type:  graphql.GraphQLString,
        description: ' Processor memory size.',
      },

     platformId: {
      type:  graphql.GraphQLString,
        description: 'Platform ID of device.',
      },

    reachabilityFailureReason: {
      type:  graphql.GraphQLString,
        description: 'Failure reason for unreachable devices.',
      },

      reachabilityStatus: {
      type:  graphql.GraphQLString,
        description: 'Device reachability status as Reachable / Unreachable.',
      },

     roleSource: {
      type:  graphql.GraphQLString,
        description: 'Role source as manual / auto.',
      },

    snmpContact: {
      type:  graphql.GraphQLString,
        description: 'SNMP contact on device.',
      },

    snmpLocation: {
      type:  graphql.GraphQLString,
        description: 'SNMP location on device.',
      },

    tunnelUdpPort: {
      type:  graphql.GraphQLString,
        description: 'Mobility protocol port is stored as tunneludpport for WLC.',
      },

    instanceUuid: {
      type:  graphql.GraphQLString,
        description: 'Instance Uuid.',
      },

      id: {
      type:  graphql.GraphQLString,
        description: 'Id.',
      }
    }
  }
});

const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      NetworkDevices: {
        type: new graphql.GraphQLList(NetworkDevice_DataType),
        resolve: function () {
          return NetworkDevices;
        }
      }
    }
  }
});

module.exports = new graphql.GraphQLSchema({
  query: queryType
});
