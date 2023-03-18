module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [                                                                                                                                                  
    [                                                                                                                                                         
      require.resolve("babel-plugin-module-resolver"),                                                                                                        
      {                                                                                                                                                
        root: ["./src/"],                                                                                                                              
        alias: {                                                                                                                                       
          '@Screens': "./src/Screens",                                                                                                              
          '@Components':'./src/Components',                                                                                      
          '@Redux':'./src/Redux',                                                                                    
          '@Common':'./src/Common',                                                                                    
          '@Control':'./src/Control',                                                                                    
        },                                                                                                                                             
        extensions: [".js", ".jsx", ".tsx", ".ios.js", ".android.js"],                                                                                        
      },                                                                                                                                                      
    ],  
    'react-native-reanimated/plugin',                                                                                                                                               
  ],        
};
