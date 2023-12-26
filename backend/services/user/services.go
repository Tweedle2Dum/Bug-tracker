package user

import "github.com/tweedle2dum/tracker/models"

type Service interface {
	CreateUser(email string , name string ) (*models.User, error)
	FetchProfileByEmail(email string) (*models.User, error)
}

type userSvc struct {
	repo Repository
}

// CreateUser implements Service.
func (s *userSvc) CreateUser(email string , name string) (*models.User, error) {
	 return s.repo.CreateUser(email,name)
}

// FetchProfileByEmail implements Service.
func (s *userSvc) FetchProfileByEmail(email string) (*models.User, error) {
	return s.repo.FetchProfileByEmail(email)
}

func NewService(r Repository) Service {
	return &userSvc{repo: r}
}
