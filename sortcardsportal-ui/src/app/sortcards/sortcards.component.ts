import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SortcardsService } from './sortcards.service';

@Component({
  selector: 'app-sortcards',
  templateUrl: './sortcards.component.html',
  styleUrls: ['./sortcards.component.css']
})
export class SortcardsComponent implements OnInit {

  constructor(private sortCardsService: SortcardsService
    , route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ValidationFailure = '';
    this.sortedCardsList = [];
    this.masterCardsList = this.SpecialCardsList.concat(this.SpadesList).concat(this.SpadesList).concat(this.DiamondsList).concat(this.HeartsList).concat(this.ClubsList);
  }
  SpecialCardsList: string[]=['4T', '2T', 'ST', 'PT', 'RT'];
  SpadesList: string[]=['2S','3S','4S','5S','6S','7S','8S','9S','10S','AS','JS','KS','QS'];
  ClubsList: string[]=['2C','3C','4C','5C','6C','7C','8C','9C','10C','AC','JC','KC','QC'];
  HeartsList: string[]=['2H','3H','4H','5H','6H','7H','8H','9H','10H','AH','JH','KH','QH'];
  DiamondsList: string[]=['2D','3D','4D','5D','6D','7D','8D','9D','10D','AD','JD','KD','QD'];
  cardsList: string[]= [];
  masterCardsList: string[]=[];
  sortedCardsList: string[]=[];
  input: string="Enter cards list(comma separated)";
  ValidationFailure: string="";

  addToList()
  {
    this.sortedCardsList = [];
    this.ValidationFailure='';
    var masterList = this.masterCardsList;
    this.cardsList = this.input.split(",");
    this.cardsList = this.cardsList.map(item=> item= item.trimStart().trimEnd().toUpperCase());
    var match = this.cardsList.filter(function(item)
    {
       return !masterList.includes(item);
    })
    if(match.length>0)
    {
      this.ValidationFailure = "Atleast one of the Input cards list is invalid";
    console.log("FailureMessage"+this.ValidationFailure);
    console.log("Master list"+ masterList);
    console.log("match"+match);
    }
else{
  this.ValidationFailure='';
  this.sortCardsService.sortCards(this.cardsList).subscribe(
    (success)=>
    {
      this.sortedCardsList = success;
      console.log(success);
    },
    (error) => {
      console.log(error);
    }
  );
}

  }
}
