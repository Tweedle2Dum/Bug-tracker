package user

import "github.com/tweedle2dum/tracker/models"

type Repository interface {
	CreateUser(email string , name string) (*models.User,error)
	FetchProfileByEmail(email string) (*models.User, error)
}