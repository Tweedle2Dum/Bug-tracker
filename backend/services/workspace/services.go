package workspace

import "github.com/tweedle2dum/tracker/models"

type Service interface {
	CreateWorkspace(email string) (*models.Workspace,error)
	GetWorkspace(email string) (*models.Workspace, error)
	GetWorkspaces(email string) (*models.Workspace, error)
}

type workspaceSvc struct {
	repo Repository
}


// CreateWorkspace implements Service.
func (s *workspaceSvc) CreateWorkspace(email string) (*models.Workspace, error) {
	return s.repo.CreateWorkspace(email)
}

// FetchWorkspaceByEmail implements Service.
func (s *workspaceSvc) GetWorkspace(email string) (*models.Workspace, error) {
   return s.repo.GetWorkspace(email)
}

func (s *workspaceSvc) GetWorkspaces(email string) (*models.Workspace, error) {
	return s.repo.GetWorkspaces(email)
 }


func NewService(r Repository) Service {
   return &workspaceSvc{repo: r}
}
