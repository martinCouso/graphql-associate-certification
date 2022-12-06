import {gql} from 'graphql-tag';

export const typeDefs = gql`
    type Query{
        "Query to get tracks array for the homepage grid"
        tracksForHome:[Track]
    }
    
    "Author of one or several tracks"
    type Author{
        id: ID!
        name:String!
        photo: String
    }
    
    "A track is a group of Modules that teaches about a specific topic"
    type Track{
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }
`;

export default typeDefs;
