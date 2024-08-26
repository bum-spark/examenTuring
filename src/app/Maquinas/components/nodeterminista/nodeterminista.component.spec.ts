import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeterministaComponent } from './nodeterminista.component';

describe('NodeterministaComponent', () => {
  let component: NodeterministaComponent;
  let fixture: ComponentFixture<NodeterministaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NodeterministaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NodeterministaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
