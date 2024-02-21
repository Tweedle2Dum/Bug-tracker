package config

import (
	"fmt"

	"github.com/spf13/viper"
)


var (
	DB_URI       = ""
	MIGRATE bool = false
)


func LoadCfg(){
	viper.AddConfigPath(".")
	viper.SetConfigName(".env")
 
	// Read the config file
	if err := viper.ReadInConfig(); err != nil {
	   fmt.Println (err)

	}
 
	DB_URI = viper.GetString("DB_URI")
	MIGRATE = viper.GetBool("MIGRATE")
	fmt.Println(DB_URI,MIGRATE)
}

