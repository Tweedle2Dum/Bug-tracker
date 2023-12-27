package workspace

import (
	"log"

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

func (r *repo) CreateWorkspace(email string, name string, description string) (*models.Workspace, error) {
	workspace := &models.Workspace{
		Name:        name,
		Description: description,
	}
	var user models.User
	if err := r.DB.Where("email = ?", email).First(&user).Error; err != nil {
		log.Fatal(err)
	}

	user.Workspaces = append(user.Workspaces, *workspace)

	if err := r.DB.Save(&user).Error; err != nil {
		return nil, err
	}

	return workspace, nil

}

func (r *repo) GetWorkspace(email string) (*models.Workspace, error) {
	panic("implement")

}

func (r *repo) GetWorkspaces(email string) (*models.Workspace, error) {
	panic("implement")

}
