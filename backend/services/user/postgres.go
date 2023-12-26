package user

import (
	"github.com/tweedle2dum/tracker/models"
	"gorm.io/gorm"
)

type repo struct {
	DB *gorm.DB
}

func NewPostgresRepo(db *gorm.DB) Repository {
	return &repo{
		DB: db,
	}
}

func (r *repo) CreateUser(email string , name string ) (*models.User, error) {
	user := &models.User{
		Email:     email,
		Name:      name,
	}

	err := r.DB.Create(&user).Error
	if err != nil {
		return nil, err
	}
	return user, nil

}

func (r *repo) FetchProfileByEmail(email string) (*models.User, error) {
	user := &models.User{}
	err := r.DB.Preload("Users").First(user, "email = ?", email).Error
	if err != nil {
		return nil, err
	}
	return user, nil
}
