package user

import "github.com/tweedle2dum/tracker/models"

type Repository interface {
	CreateUser(user models.User) (*models.User,error)
	FetchProfileByEmail(email string) (*models.User, error)
}